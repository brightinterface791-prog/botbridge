export default function ConnectionStatus({
  signupData,
}) {
  return (
    <div className="rounded-xl border border-slate-700 bg-slate-900 p-5">
      <h3 className="mb-4 text-sm font-semibold text-white">
        Connection Details
      </h3>

      <div className="space-y-3 text-sm">

        <Row
          label="Verified Name"
          value={signupData.verifiedName}
        />

        <Row
          label="Phone Number"
          value={signupData.phoneNumber}
        />

        <Row
          label="Quality Rating"
          value={signupData.qualityRating}
        />

        <Row
          label="Messaging Limit"
          value={signupData.messagingLimit}
        />

        <Row
          label="Business ID"
          value={signupData.businessId}
        />

        <Row
          label="WABA ID"
          value={signupData.wabaId}
        />

        <Row
          label="Phone Number ID"
          value={signupData.phoneNumberId}
        />

      </div>
    </div>
  );
}

function Row({ label, value }) {
  return (
    <div className="flex justify-between gap-4">
      <span className="text-slate-400">
        {label}
      </span>

      <span className="max-w-[180px] truncate text-right text-white">
        {value || "-"}
      </span>
    </div>
  );
}