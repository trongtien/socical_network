import { RouteComponentProps } from 'react-router-dom';

type IRouterComponent = React.ComponentType<RouteComponentProps<any>> | React.ComponentType<any> | undefined;

export interface IRouter{
    exact?: boolean;
    name: string,
    path: string;
    component: IRouterComponent | null;
    items?: IRouter[];
}