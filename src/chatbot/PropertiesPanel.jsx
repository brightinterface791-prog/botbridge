import MessageProperties from "../chatbot/PropertiesPanel/Properties/MessageProperties";
import ButtonProperties from "../chatbot/PropertiesPanel/Properties/ButtonProperties";
import ListProperties from "../chatbot/PropertiesPanel/Properties/ListProperties";
import ImageProperties from "../chatbot/PropertiesPanel/Properties/ImageProperties";
import PdfProperties from "../chatbot/PropertiesPanel/Properties/PdfProperties";
import VideoProperties from "../chatbot/PropertiesPanel/Properties/VideoProperties";
import ConditionProperties from "../chatbot/PropertiesPanel/Properties/ConditionProperties";
import DelayProperties from "../chatbot/PropertiesPanel/Properties/DelayProperties";
import AIProperties from "../chatbot/PropertiesPanel/Properties/AIProperties";
import ApiProperties from "../chatbot/PropertiesPanel/Properties/ApiProperties";
import HumanProperties from "../chatbot/PropertiesPanel/Properties/HumanProperties";
import DatabaseProperties from "../chatbot/PropertiesPanel/Properties/DatabaseProperties";
import EmptyPanel from "../chatbot/PropertiesPanel/Properties/EmptyPanel";

const PropertiesPanel = ({ flow, selectedNode }) => {
  if (!selectedNode) {
    return <EmptyPanel />;
  }

  switch (selectedNode.type) {
    case "message":
      return <MessageProperties flow={flow} selectedNode={selectedNode} />;

    case "button":
      return <ButtonProperties flow={flow} selectedNode={selectedNode} />;

    case "list":
      return <ListProperties flow={flow} selectedNode={selectedNode} />;

    case "image":
      return <ImageProperties flow={flow} selectedNode={selectedNode} />;

    case "pdf":
      return <PdfProperties flow={flow} selectedNode={selectedNode} />;

    case "video":
      return <VideoProperties flow={flow} selectedNode={selectedNode} />;

    case "condition":
      return (
        <ConditionProperties
          flow={flow}
          selectedNode={selectedNode}
        />
      );

    case "delay":
      return <DelayProperties flow={flow} selectedNode={selectedNode} />;

    case "ai":
      return <AIProperties flow={flow} selectedNode={selectedNode} />;

    case "api":
      return <ApiProperties flow={flow} selectedNode={selectedNode} />;

    case "human":
      return <HumanProperties flow={flow} selectedNode={selectedNode} />;

    case "database":
      return (
        <DatabaseProperties
          flow={flow}
          selectedNode={selectedNode}
        />
      );

    default:
      return <EmptyPanel />;
  }
};

export default PropertiesPanel;