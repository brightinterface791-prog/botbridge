import DashboardLayout from "../../../layouts/DashboardLayout";

import WelcomeCard from "../../../components/WelcomeCard";
import QuickActions from "../../../components/QuickActions";
import SetupJourney from "../../../components/SetupJourney";
import ActivityCard from "../../../components/ActivityCard";

export default function Dashboard() {
  return (
      <div className="space-y-6 p-3">
        <WelcomeCard />

        <QuickActions />

        <div className="grid gap-6 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <SetupJourney />
          </div>

          <ActivityCard />
        </div>
      </div>
  );
}