import excuteQuery from "../../lib/db";

export default async function handler(req, res) {
  try {
    const result = await excuteQuery({
      query: "SELECT * FROM User ORDER BY id DESC",
      values: "",
    });
    res.status(200).json({ data: result });
  } catch (error) {
    res.status(500).json({ data: error });
  }
}
