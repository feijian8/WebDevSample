package traveltours.rest.service;

import traveltours.rest.model.Resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;

public abstract class ResourceService<T extends Resource> {

    @Path("/create")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public abstract T create(MultivaluedMap<String, String> formParams);


    @Path("/read/{id}")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public abstract T read(String id);

    @Path("/update")
    @POST
    @Consumes(MediaType.APPLICATION_FORM_URLENCODED)
    @Produces(MediaType.APPLICATION_JSON)
    public abstract T update(MultivaluedMap<String, String> formParams);

    @Path("/delete")
    @DELETE
    public abstract void delete(T resource);

    @Path("/list")
    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public abstract List<T> all();

}
