import './Error.scss';

type ErrorProps = {
    message: string
}

const Error = ({ message }: ErrorProps) => {

    return (
        <div className='rk-error'>
            {message}
        </div>
    );
}

export default Error;