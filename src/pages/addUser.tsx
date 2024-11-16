import React, { Suspense } from 'react';
import MainLayout from '../shared/hocs/MainLayout';

const AddUserForm = React.lazy(async () => await import('../features/authentication/components/AddUserForm'));

function AddUser() {
  return (
    <MainLayout>
      <Suspense fallback={<div>...Loading</div>}>
        <AddUserForm />
      </Suspense>
    </MainLayout>
  );
}

export default AddUser;
