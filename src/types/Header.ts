import React from 'react';

export type Header<T> = {
  accessor: keyof T;
  header: React.ReactNode;
  renderCell: (data: T) => React.ReactNode;
};
