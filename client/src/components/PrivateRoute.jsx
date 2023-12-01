import { useSelector } from 'react-redux';
import { Outlet, Navigate } from 'react-router-dom';

export default function PrivateRoute() {
  const { currentUser } = useSelector(state => state.user)

  return (
    <main>
      {currentUser ? <Outlet /> : <Navigate to='/signin' />}
    </main>
  )
}
