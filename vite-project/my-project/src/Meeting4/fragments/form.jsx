import Input from "../component/input";
import Label from "../component/label";
export default function Form({label,input}) {
    return (
        <div className="">
        <Label label={label}/>
        <Input input={input}/>
        </div>
    )
}