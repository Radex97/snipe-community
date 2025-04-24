diff
--- a/components/CreateMessage.tsx
+++ b/components/CreateMessage.tsx
@@ -1,6 +1,7 @@
 'use client';
 
 import { useState } from 'react';
+import React from 'react';
 import { addMessage } from '../firebase/auth';
 
 const CreateMessage = () => {
@@ -10,7 +11,7 @@
     setMessage(event.target.value);
   };
 
-  const handleSubmit = (event: any) => {
+  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
     event.preventDefault();
     // Hier die Logik zum Speichern der Nachricht hinzufügen
     addMessage(message);