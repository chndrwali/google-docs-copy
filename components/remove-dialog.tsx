'use client';

import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '@/components/ui/alert-dialog';
import { api } from '@/convex/_generated/api';
import { Id } from '@/convex/_generated/dataModel';
import { useMutation } from 'convex/react';
import { useState } from 'react';

interface RemoveDialogProps {
  documentId: Id<'documents'>;
  children: React.ReactNode;
}

export const RemoveDialog = ({ documentId, children }: RemoveDialogProps) => {
  const remove = useMutation(api.documents.removeById);
  const [isDeleting, setIsDeleting] = useState(false);

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>{children}</AlertDialogTrigger>
      <AlertDialogContent onClick={(e) => e.stopPropagation()}>
        <AlertDialogHeader>
          <AlertDialogTitle>Are you sure?</AlertDialogTitle>
          <AlertDialogDescription>This action cannot be undone. this will permanently delete your document.</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          <AlertDialogCancel onClick={(e) => e.stopPropagation()}>Cancel</AlertDialogCancel>
          <AlertDialogAction
            disabled={isDeleting}
            onClick={(e) => {
              e.stopPropagation();
              setIsDeleting(true);
              remove({ id: documentId }).finally(() => setIsDeleting(false));
            }}
          >
            Delete
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};