
import React, { useState, useEffect } from 'react';
import { useToast } from "@/hooks/use-toast";
import TaskColumn, { Column } from './TaskColumn';
import { Task } from './TaskCard';

// Initial data for the task board
const initialColumns: Column[] = [
  {
    id: 'todo',
    title: 'Ready to Apply',
    color: 'muted',
    tasks: [
      {
        id: 't1',
        title: 'Senior React Developer at Stripe',
        description: '89% match • Resume tailored • Keywords optimized',
        tag: { color: 'purple', label: 'High Priority' },
        dueDate: 'Apply by May 20',
        assignees: 2,
        progress: { completed: 3, total: 5 }
      },
      {
        id: 't2',
        title: 'Product Manager at Airbnb',
        description: '92% match • Growth metrics highlighted',
        tag: { color: 'accent', label: 'Perfect Match' },
        dueDate: 'Apply by May 22',
        assignees: 1,
        progress: { completed: 0, total: 4 }
      }
    ]
  },
  {
    id: 'in-progress',
    title: 'Applied & Waiting',
    color: 'blue',
    tasks: [
      {
        id: 't5',
        title: 'DevOps Engineer at Netflix',
        description: 'Applied 3 days ago • AWS skills emphasized',
        tag: { color: 'blue', label: 'Pending' },
        dueDate: 'Response by May 18',
        assignees: 1,
        progress: { completed: 2, total: 3 }
      },
      {
        id: 't6',
        title: 'UX Designer at Figma',
        description: 'Applied 1 week ago • Portfolio link added',
        tag: { color: 'accent', label: 'Follow Up' },
        dueDate: 'Response by May 19',
        assignees: 2,
        progress: { completed: 5, total: 8 }
      }
    ]
  },
  {
    id: 'in-review',
    title: 'Interview Stage',
    color: 'amber',
    tasks: [
      {
        id: 't8',
        title: 'Full Stack Dev at Discord',
        description: 'Phone screen tomorrow • Interview prep: 15 questions ready',
        tag: { color: 'accent', label: 'Interview' },
        dueDate: 'Tomorrow 2PM',
        assignees: 1,
        progress: { completed: 4, total: 5 }
      },
      {
        id: 't9',
        title: 'Data Scientist at Spotify',
        description: 'Final round Friday • Salary range: $165k-195k',
        tag: { color: 'blue', label: 'Final Round' },
        dueDate: 'Friday 10AM',
        assignees: 2,
        progress: { completed: 6, total: 6 }
      }
    ]
  },
  {
    id: 'completed',
    title: 'Offers Received',
    color: 'accent',
    tasks: [
      {
        id: 't11',
        title: 'Backend Engineer at Shopify',
        description: 'Offer: $155k + equity • Negotiation tips ready',
        tag: { color: 'purple', label: 'Offer' },
        dueDate: 'Respond by May 10',
        assignees: 1,
        progress: { completed: 5, total: 5 }
      }
    ]
  }
];

interface TaskBoardProps {
  className?: string;
}

const TaskBoard: React.FC<TaskBoardProps> = ({ className }) => {
  const [columns, setColumns] = useState<Column[]>(initialColumns);
  const [draggedTask, setDraggedTask] = useState<Task | null>(null);
  const [dragSourceColumn, setDragSourceColumn] = useState<string | null>(null);
  const { toast } = useToast();

  const handleTaskDragStart = (e: React.DragEvent, task: Task) => {
    e.dataTransfer.setData('taskId', task.id);
    setDraggedTask(task);
    
    // Find source column
    const sourceColumn = columns.find(col => 
      col.tasks.some(t => t.id === task.id)
    );
    
    if (sourceColumn) {
      setDragSourceColumn(sourceColumn.id);
      e.dataTransfer.setData('sourceColumnId', sourceColumn.id);
    }
  };

  const handleTaskDragEnd = () => {
    setDraggedTask(null);
    setDragSourceColumn(null);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
  };

  const handleDragLeave = (e: React.DragEvent) => {
    // Handle drag leave logic if needed
  };

  const handleDrop = (e: React.DragEvent, targetColumnId: string) => {
    e.preventDefault();
    
    const taskId = e.dataTransfer.getData('taskId');
    const sourceColumnId = e.dataTransfer.getData('sourceColumnId');
    
    if (!taskId || !sourceColumnId || sourceColumnId === targetColumnId) {
      return;
    }
    
    // Update columns state
    const newColumns = columns.map(column => {
      // Remove task from source column
      if (column.id === sourceColumnId) {
        return {
          ...column,
          tasks: column.tasks.filter(task => task.id !== taskId)
        };
      }
      
      // Add task to target column
      if (column.id === targetColumnId) {
        const taskToMove = columns.find(col => col.id === sourceColumnId)?.tasks.find(task => task.id === taskId);
        if (taskToMove) {
          return {
            ...column,
            tasks: [...column.tasks, taskToMove]
          };
        }
      }
      
      return column;
    });
    
    setColumns(newColumns);
    
    // Show a toast notification
    const targetColumn = columns.find(col => col.id === targetColumnId);
    if (targetColumn && draggedTask) {
      toast({
        title: "Task moved",
        description: `${draggedTask.title} moved to ${targetColumn.title}`,
      });
    }
  };

  const handleStatusChange = (taskId: string, newStatus: string) => {
    // This function can be used for programmatic status changes (not used in this implementation)
  };

  return (
    <div className={`flex gap-4 overflow-x-auto pb-4 ${className}`}>
      {columns.map(column => (
        <TaskColumn
          key={column.id}
          column={column}
          onDrop={handleDrop}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onTaskDragStart={handleTaskDragStart}
          onTaskDragEnd={handleTaskDragEnd}
          onStatusChange={handleStatusChange}
        />
      ))}
    </div>
  );
};

export default TaskBoard;
