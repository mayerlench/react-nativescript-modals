import { useContext } from 'react';
import SnackbarContext, { SnackbarContextValue }  from '../context/SnackbarContext';

const useSnackbar = (): SnackbarContextValue => useContext(SnackbarContext);

export default useSnackbar;