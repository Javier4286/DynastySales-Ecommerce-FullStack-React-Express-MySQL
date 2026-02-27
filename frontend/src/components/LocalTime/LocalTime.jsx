import { ClockCircleOutlined, EnvironmentOutlined } from "@ant-design/icons";
import { TimeContainer } from "./localTime.styles";
import { useQuery } from "@tanstack/react-query";
import api from "../../utils/api";

const LocalTime = () => {
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
        return "Location unavailable";
      }
    },

    staleTime: Infinity,

    refetchOnWindowFocus: false,
  });

  return (
    <TimeContainer>
      <EnvironmentOutlined style={{ color: "#1890ff", fontSize: "1.1rem" }} />
      <span className="location-text">{location || "Locating..."}</span>
      <span className="time-divider">|</span>

      <div className="time-display">
        <ClockCircleOutlined className="clock-icon" />
        <span className="time-digits">{time}</span>
      </div>
    </TimeContainer>
  );
};

export default LocalTime;
