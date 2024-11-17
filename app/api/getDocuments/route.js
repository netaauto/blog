import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export async function GET(request) {
const { searchParams } = new URL(request.url);

const collectionName = searchParams.get('collection');


  try {
    const querySnapshot = await getDocs(collection(db, collectionName));

    const newData = querySnapshot.docs.map((doc) => {
        const { content, ...rest } = doc.data(); // `content` hariç tutuluyor
        return {
          ...rest,
          id: doc.id,
        };
      });

    return NextResponse.json({
      data: newData,
    });

  } catch (error) {
    console.error("Error fetching documents: ", error);
    return NextResponse.json(
      { error: "Error fetching data" },
      { status: 500 }
    );
  }
}
