const Button = ({ className, content, onClick }) => {
    return ( 
        <button
            type="button"
            className={className}
            onClick={onClick}
        >
            {content}
        </button>
     );
}
 
export default Button;