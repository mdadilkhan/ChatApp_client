import { useParams } from "react-router-dom";
import { useMemo } from "react";
const useConversation = () => {
  const params = useParams();
  const conversationId = useMemo(() => {
    if (!params?.conversationId) {
      return "";
    }

    return params.conversationId;
  }, [params?.conversationId]);

  const isOpen = useMemo(() => !!conversationId, [conversationId]);
  return {isOpen, conversationId};
};

export default useConversation;
