// import Permission from "../../components/Permission";
// import AllAskedPermissions from "./AllAskedPermissions";
// import AllApprovedPermissions from "./AllApprovedPermissions";
// import AllRejectedPermissions from "./AllRejectedPermissions";

const permissionData = [
  {
    id: "ask1",
    type: "asked",
    name: "armaan singh cheema",
    subject:
      "I needed a permission to go with my home for a duration of 2 days",
    date: "19-05-2022",
    url: "permission_detail/ask1",
  },
  {
    id: "r1",
    type: "rejected",
    name: "anubhav gera",
    subject:
      "I needed a permission to go with my home for a duration of 2 days dfadfa asdf df fa asdfasdfaef asdf adadf daf adsf dfasdf asdf asf",
    date: "19-05-2022",
    url: "permission_detail/r1",
  },
  {
    id: "r2",
    type: "rejected",
    name: "harman singh",
    subject: "I needed a permission to go to my home for a duration of 2 days",
    date: "19-05-2022",
    url: "permission_detail/r2",
  },
  {
    id: "r3",
    type: "rejected",
    name: "robert peterson",
    subject:
      "I needed a permission to go to my home for a duration of 2 days due to an emergency",
    date: "19-05-2022",
    url: "permission_detail/r3",
  },
  {
    id: "a1",
    type: "approved",
    name: "rohit aggarwal",
    subject:
      "I needed a permission to go with my home for a duration of 2 days dfadfa asdf df fa asdfasdfaef asdf adadf daf adsf dfasdf asdf asf",
    date: "19-05-2022",
    url: "permission_detail/a1",
  },
  {
    id: "a2",
    type: "approved",
    name: "abhimanyu raghuvanshi",
    subject:
      "I needed a permission to go to my home for a duration of 2 days due to an emergency",
    date: "19-05-2022",
    url: "permission_detail/a2",
  },
];

const AllPermissions = () => {
  console.log(permissionData);
  //   const askedPermissions = permissionData.map(
  //     (permi) =>
  //       permi.type === "asked" && (
  //         <Permission
  //           key={permi.id}
  //           id={permi.id}
  //           type={permi.type}
  //           name={permi.name}
  //           subject={permi.subject}
  //           date={permi.date}
  //           url={permi.url}
  //         />
  //       )
  //   );
  //   const approvedPermissions = permissionData.map(
  //     (permi) =>
  //       permi.type === "approved" && (
  //         <Permission
  //           key={permi.id}
  //           id={permi.id}
  //           type={permi.type}
  //           name={permi.name}
  //           subject={permi.subject}
  //           date={permi.date}
  //           url={permi.url}
  //         />
  //       )
  //   );
  //   const rejectedPermissions = permissionData.map((permi) => (
  //     <Permission
  //       key={permi.id}
  //       id={permi.id}
  //       type={permi.type}
  //       name={permi.name}
  //       subject={permi.subject}
  //       date={permi.date}
  //       url={permi.url}
  //     />
  //   ));
  return (
    <>
      {/* <Permission
        id="ask1"p
        type="asked"
        name="armaan singh cheema"
        subject="I needed a permission to go with my home for a duration of 2 days"
        date="19-05-2022"
        url="permission_detail/ask1"
      />
      <Permission
        id="r1"
        type="rejected"
        name="anubhav Gera"
        subject="I needed a permission to go with my home for a duration of 2
        days dfadfa asdf df fa asdfasdfaef asdf adadf daf adsf dfa
        asdf asdf asf"
        date="19-05-2022"
        url="permission_detail/r1"
      />
      <Permission
        id="r2"
        type="rejected"
        name="Harman Singh"
        subject="I needed a permission to go to my home for a duration of 2
        days"
        date="19-05-2022"
        url="permission_detail/r2"
      />
      <Permission
        id="r3"
        type="rejected"
        name="Robert Peterson"
        subject="I needed a permission to go to my home for a duration of 2
        days due to an emergency"
        date="19-05-2022"
        url="permission_detail/r3"
      />
      <Permission
        id="a1"
        type="approved"
        name="Rohit Aggarwal"
        subject="I needed a permission to go with my home for a duration of 2
        days dfadfa asdf df fa asdfasdfaef asdf adadf daf adsf dfa
        asdf asdf asf"
        date="19-05-2022"
        url="permission_detail/a1"
      />
      <Permission
        id="a2"
        type="approved"
        name="abhimanyu raghuvanshi"
        subject="I needed a permission to go to my home for a duration of 2
        days due to an emergency"
        date="19-05-2022"
        url="permission_detail/a2"
      /> */}
    </>
  );
};

export default AllPermissions;
