import { useClock } from '../../Hooks/useClock';

export const Clock = () => {
    const clock = useClock();

    return (
        <div className="Time">{clock}</div>
    );
};