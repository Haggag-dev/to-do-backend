import request from "supertest";
import app from "../app";
import ToDo from "../entities/ToDo";

// Read all
describe("GET /api/to-dos", () => {
  describe("given the correct url", () => {
    let response: any;

    beforeAll(async () => {
      const url = "/api/to-dos";
      response = await request(app).get(url);
    });

    it("should return a list of to-dos", () => {
      expect(response.body).toBeInstanceOf(Array);
      expect(response.body.length).toBeGreaterThan(0);
    });

    it("should respond with a 200 status code", async () => {
      expect(response.status).toBe(200);
    });

    it("should specify json in the content type header", async () => {
      expect(response.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });
});

// Read one
describe("GET /api/to-dos/:id", () => {
  describe("given wrong url params", () => {
    it("should respond with a 404 status code", async () => {
      await request(app).get("/api/to-dos/1x").expect(404);
    });
  });

  describe("given the correct url", () => {
    let response: any;
    const url = "/api/to-dos/1";

    beforeAll(async () => {
      response = await request(app).get(url);
    });

    it("should respond with a 200 status code", () => {
      expect(response.status).toBe(200);
    });

    it("should specify json in the content type header", () => {
      expect(response.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });

    it("should return a to-do", () => {
      expect(response.body).toEqual({
        id: 1,
        title: "Attend the bachelor's meeting",
        done: false,
        priority: "high",
      });
    });
  });
});

// Read high-priority
describe("GET /api/to-dos/high-priority", () => {
  describe("given the correct url", () => {
    let response: any;
    beforeAll(async () => {
      const url = "/api/to-dos/high-priority";
      response = await request(app).get(url);
    });

    it("should respond with a status code 200", () => {
      expect(response.status).toBe(200);
    });

    it("should return high priority to-dos only", () => {
      response.body.forEach((toDo: ToDo) => {
        expect(toDo).toHaveProperty("priority", "high");
      });
    });
  });
});

// Update
describe("PATCH /api/to-dos/update/done/:id", () => {
  const url = "/api/to-dos/update/done/2";

  describe("given the correct url params", () => {
    let response: any;

    beforeAll(async () => {
      response = await request(app).patch(url);
    });

    it("should return an updated to-do with done as true", () => {
      expect(response.status).toBe(200);
    });

    it("should specify json in the content type header", () => {
      expect(response.header["content-type"]).toEqual(
        expect.stringContaining("json")
      );
    });
  });

  describe("given an id that doesnt exist", () => {
    it("should return a status code 404", async () => {
      await request(app)
        .patch(url + "1850")
        .expect(404);
    });
  });
});

// Delete
describe("DELETE /api/to-dos/delete/done/:id", () => {
  const url = "/api/to-dos/delete/done/2";

  it("should return a status code 204", async () => {
    await request(app).delete(url).expect(204);
  });
});
