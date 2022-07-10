export interface IBaseTemplate {
    simpleTextProp: string;
}

const BaseTemplate: React.FC<IBaseTemplate> = ({simpleTextProp}) => {
    return <div>{simpleTextProp}</div>
};

export default BaseTemplate;