import { Button } from "@heroui/button";
import { FaCalendarAlt } from "react-icons/fa";

interface Props {
  buttonText?: string;
  isLoading?: boolean;
  onPress?: () => void;
  isDisabled?: boolean;
}

export default function ScheduleButton(props: Props) {
  const { buttonText, isLoading, onPress, isDisabled } = props;

  return (
    <Button
      size="sm"
      title="Schedule post"
      onPress={onPress}
      color="primary"
      isDisabled={isDisabled}
      isLoading={isLoading}
      isIconOnly={!buttonText}
      variant="flat"
    >
      {buttonText ? (
        buttonText ?? "Schedule"
      ) : (
        <FaCalendarAlt className="text-xl" />
      )}
    </Button>
  );
}
