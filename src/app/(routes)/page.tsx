import Container from "@/components/ui/container";
import Billboard from "@/components/ui/billboard";
import getBillboard from "@/../../actions/get-billboard";

export const revalidate = 0;

const HomePage = async () => {
  const billboard = await getBillboard("d8a81e6a-d273-4f99-a7f6-9265dbb01220");

  return (
    <div>
      <Container>
        <div className="space-y-10 pb-10">
          <Billboard data={billboard}/>
        </div>
      </Container>
    </div>
  );
}

export default HomePage;