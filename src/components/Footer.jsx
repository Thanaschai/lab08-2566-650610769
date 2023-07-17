export const Footer = (Footer) => {
  return (
    <div className="mt-3">
      <p className="text-secondary text-center">
        copyright © {Footer.year} {Footer.fullName} {Footer.studentID}
      </p>
    </div>
  );
};
