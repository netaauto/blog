import { NextResponse } from "next/server";
import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase";

export async function GET(request) {
  try {
    // Firestore'dan verileri al
    const querySnapshot = await getDocs(collection(db, "mainCategories"));

    // Alınan verileri newData değişkenine map'le
    const newData = querySnapshot.docs.map((doc) => ({
      ...doc.data(),
      id: doc.id,
    }));

    // Yanıtı JSON formatında döndür
    return NextResponse.json({
      data: newData,
    });

  } catch (error) {
    // Hata durumunu yönet
    console.error("Error fetching documents: ", error);
    return NextResponse.json(
      { error: "Error fetching data" },
      { status: 500 }
    );
  }
}
