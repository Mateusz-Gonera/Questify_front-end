import { Grid } from 'react-loader-spinner';
import style from './Loader.module.css';

const Loader = () => {
    return (
        <div className={style.overlay}>
            <Grid
                height="80"
                width="80"
                color="rgb(203, 133, 71)"
                ariaLabel="grid-loading"
                radius="12.5"
                wrapperStyle={{}}
                className={style.loader}
                visible={true}
                text="Loading your content..."
            />
        </div>
    );
};

export default Loader;