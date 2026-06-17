import { ClockCircleOutlined } from "@ant-design/icons";
import { TimeContainer, StyledEnvironmentIcon } from "./localTime.styles";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";
import useThemeStore from "../../store/useThemeStore";

const LocalTime = () => {
  const { isDarkMode } = useThemeStore();

  const { data: time } = useQuery({
    queryKey: ["currentTime"],
    queryFn: () => new Date().toLocaleTimeString(),
    refetchInterval: 1000,
    initialData: () => new Date().toLocaleTimeString(),
  });

  const { data: location } = useQuery({
    queryKey: ["location"],
    queryFn: async () => {
      try {
        const position = await new Promise((res, rej) =>
          navigator.geolocation.getCurrentPosition(res, rej, { timeout: 5000 }),
        );

        const { latitude, longitude } = position.coords;

        const response = await api.get("/location/reverse", {
          params: { lat: latitude, lon: longitude },
        });

        return response.data.location;
      } catch (error) {
        return error.response?.data?.message || error.message;
      }
    },
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  });

  return (
    <TimeContainer $isDarkMode={isDarkMode}>
      <StyledEnvironmentIcon />
      <span className="location-text">{location}</span>
      <span className="time-divider">|</span>

      <div className="time-display">
        <ClockCircleOutlined className="clock-icon" />
        <span className="time-digits">{time}</span>
      </div>
    </TimeContainer>
  );
};

export default LocalTime;
