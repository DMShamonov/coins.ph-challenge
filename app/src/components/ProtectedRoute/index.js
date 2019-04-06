import verifySession from 'decorators/verifySession';

import ProtectedRoute from './ProtectedRoute';

export default verifySession(ProtectedRoute);
