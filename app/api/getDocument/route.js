import { collection, getDocs } from "firebase/firestore";
import { db } from "@/firebase"; // Firebase Firestore yapılandırmanız
import { NextResponse } from "next/server";

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const collectionName = searchParams.get("collection");
  const slug = searchParams.get('id'); // URL'den slug'ı alıyoruz
  
  try {
    // Belirtilen koleksiyondaki tüm belgeleri getir
    const querySnapshot = await getDocs(collection(db, collectionName));
    
    // Belgeleri dolaş ve slug ile eşleşen belgeyi bul
    let foundDocument = null;

    querySnapshot.forEach((doc) => {
      const documentData = doc.data();
      
      if (documentData.slug === slug) {
        foundDocument = {
          ...documentData,
          id: doc.id, // Belge ID'sini de ekliyoruz
        };
      }
    });

    // Eşleşen belgeyi bulduysak döndür
    if (foundDocument) {
      return NextResponse.json({
        data: foundDocument,
      });
    } else {
      // Eğer eşleşen belge yoksa 404 döndür
      return NextResponse.json({ error: "Document not found" }, { status: 404 });
    }

  } catch (error) {
    console.error("Error fetching documents: ", error);
    return NextResponse.json(
      { error: "Error fetching documents" },
      { status: 500 }
    );
  }
}
