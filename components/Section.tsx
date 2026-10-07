type SectionProps = {
  children: React.ReactNode;
  id?: string;
  title: string;
};

export function Section({ children, id, title }: SectionProps) {
  return (
    <section className="section" id={id}>
      <h2>{title}</h2>
      {children}
    </section>
  );
}
