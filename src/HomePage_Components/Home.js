import * as useComponent from "../index";
export function Home() {
  return (
    <>
      <img
        src="https://static.onecms.io/wp-content/uploads/sites/34/2019/12/bookshelf-organization-dark-room-full-rick-lozier-1219.jpg"
        alt="loading..."
        className="Img"
      />

      <useComponent.FeaturedAuthors />
      <useComponent.BookBatches />
    </>
  );
}
