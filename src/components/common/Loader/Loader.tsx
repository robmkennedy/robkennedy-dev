import './Loader.scss';

type LoaderProps = {
    message: string
}

const Loader = ({ message }: LoaderProps) => {

    return (
        <div className='rk-loader'>
            {message}
        </div>
    );
}

export default Loader;