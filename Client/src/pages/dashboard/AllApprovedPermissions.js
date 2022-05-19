import Permission from "../../components/Permission";

const AllApprovedPermissions = () => {
  return (
    <>
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
      />
    </>
  );
};

export default AllApprovedPermissions;
