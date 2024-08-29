import { InputTextBase } from "../../../shared/components/InputBase/InputTextBase";
import css from '../../../shared/components/InputBase/InputBase.module.css'

const BaseInput = ({ size, value, onChange, placeholder, checked, alignment }) => {
    
    return (
        <div >
            <h2 className="mb-5 text-center text-1xl font-bold">Base input</h2>
            <div className={css.inputGroupBase } >
            <InputTextBase size={size} value={value}
                    onChange={onChange} placeholder={placeholder} checked={checked} alignment={alignment} />
            </div>
        </div>
    )
}
export default BaseInput;