import { useSelector } from 'react-redux';

export const useSeance = () => {
    const { seance } = useSelector(state => state)

    return { seance }
}