import { useEffect, useState } from "react";
import { participantsApi } from "../api";
import { toast } from "react-toastify";

export default function useParticipants(expeditionId) {
    const [participants, setParticipants] = useState([]);

    useEffect(() => {
        const loadParticipants = async () => {
            try {
                const result = await participantsApi.getAll();

                setParticipants(
                    result.filter(
                        participant => participant.expedition_id === expeditionId
                    )
                );
            } catch (error) {
                toast(error.message);
            }
        };

        loadParticipants();
    }, [expeditionId]);

    const isParticipant = userId => {
        return participants.some(
            participant => participant.user_id === userId
        );
    };

    const join = async userId => {
        await participantsApi.join(expeditionId, userId);

        setParticipants(prev => [
            ...prev,
            {
                expedition_id: expeditionId,
                user_id: userId
            }
        ]);
    };

    const leave = async userId => {
        await participantsApi.remove(expeditionId, userId);

        setParticipants(prev =>
            prev.filter(participant => participant.user_id !== userId)
        );
    };

    return {
        participants,
        isParticipant,
        join,
        leave
    };
}