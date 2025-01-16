// noInspection JSDeprecatedSymbols
import { Navigate } from 'react-router-dom';
import { RoutePath } from './const';


type PrivateRouteProps = {
  children: JSX.Element;
  isNeedNavigate: boolean;
  navigatePath: RoutePath;
}

export default function PrivateRoute({
  children,
  isNeedNavigate,
  navigatePath
}: PrivateRouteProps): JSX.Element {
  return isNeedNavigate ? <Navigate to={navigatePath} /> : children;
}
