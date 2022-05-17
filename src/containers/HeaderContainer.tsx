import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import Header from '../components/Header';
import { change } from '../redux/modules/openMenu';
export default function HeaderContainer() {
  const dispatch = useDispatch();

  const add = useCallback(
    (state: any) => {
      dispatch(change(state));
    },
    [dispatch]
  );
  return <Header add={add} />;
}
