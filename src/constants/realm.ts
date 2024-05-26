export const TaskSchema = {
  name: 'Task',
  properties: {
    _id: 'string',
    name: 'string',
    isDone: 'bool',
    description: 'string?',
    startDate: 'int?',
    createdAt: 'int',
    endDate: 'int?',
    hasDeadline: 'bool?',
    repeat: 'string?',
  },
  primaryKey: '_id',
};
