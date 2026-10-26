import { useEffect, useState } from "react";
import { expeditionApi, participantsApi } from "../api";
import { toast } from "react-toastify";


export default function useExpeditions() {
    const [expeditions, setExpeditions] = useState([]);
    const [participants, setParticipants] = useState([]);
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const loadData = async () => {
            try {
                const expeditionResult = await expeditionApi.getAll();
                setExpeditions(expeditionResult);

                const participantsResult = await participantsApi.getAll();
                setParticipants(participantsResult);
            } catch (error) {
                toast.error(error);
            } finally {
                setLoading(false)
            }
        };

        loadData();
    }, []);

    const getParticipantsCount = (expeditionId) => {
        return participants.filter(
            participant => participant.expedition_id === expeditionId
        ).length;
    };

    return {
        expeditions,
        participants,
        getParticipantsCount,
        loading
    };
}