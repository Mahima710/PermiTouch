import Permission from "../../components/Permission";

const AllRejectedPermissions = () => {
  return (
    <>
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
    </>
  );
};

export default AllRejectedPermissions;
