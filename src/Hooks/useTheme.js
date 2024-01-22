import { useSelector, useDispatch } from 'react-redux';
import { setThemeStorage } from '../store/themeSlice';

export const useTheme = () => {
    const dispatch = useDispatch();
    const theme = useSelector((state) => state.theme['theme']);

    const changeTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        dispatch(setThemeStorage({ theme: newTheme }));
    };

    return [theme, changeTheme];
};