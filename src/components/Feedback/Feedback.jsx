import PropTypes from 'prop-types'
export const Feedback=({elements, onClick})=>{
return(
    elements.map((el, i)=>
    <button type="button" key={i} name={el} onClick={onClick}>
        {el} 
    </button>
    )
)
}

Feedback.propTypes={
    elements: PropTypes.arrayOf(PropTypes.string.isRequired),
    onClick: PropTypes.func.isRequired
}