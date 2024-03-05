import { RouteComponentProps } from 'react-router-dom';
import { useAuthStore } from './store/authStore';

const protectDashboard = (props: RouteComponentProps) => {
  const authStore = useAuthStore();

  if (authStore.isAuthenticated) {
    return props.children; // Render the component if user is authenticated
  } else {
    props.history.push('/signin'); // Redirect to SignInPage if user is not authenticated
    return null; // Return null to prevent rendering of the protected component
  }
};

export default protectDashboard;
