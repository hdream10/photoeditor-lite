import { PageContainer, Spacer } from "@/shared/ui";
import { SystemInfo } from "@/features/SystemInfo";
import { AccelerometerInfo } from "@/features/AccelerometerInfo";

const Main = () => {
  return (
    <PageContainer>
      <SystemInfo />
      <Spacer />
      <AccelerometerInfo />
    </PageContainer>
  );
};

export default Main;
