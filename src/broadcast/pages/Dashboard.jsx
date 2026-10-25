import BroadcastWelcomeCard from "../components/BroadcastWelcomeCard";
import BroadcastStats from "../components/BroadcastStats";
import RecentCampaigns from "../components/RecentCampaigns";
import BroadcastActivity from "../components/BroadcastActivity";
import CampaignTable from "../components/CampaignTable";

export default function Dashboard() {
  return (
    <div className="space-y-8 p-8">
      <BroadcastWelcomeCard />

      <BroadcastStats />

      <div className="grid gap-8 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <RecentCampaigns />
        </div>

        <BroadcastActivity />
      </div>

      <CampaignTable />
    </div>
  );
}