package traveltours.rest.service;

import traveltours.rest.model.Resource;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.MultivaluedMap;
import java.util.List;

public abstract class ResourceService<T extends Resource> {

    public abstract T create(MultivaluedMap<String, String> formParams);

    public abstract T read(String id);

    public abstract T update(MultivaluedMap<String, String> formParams);

    public abstract void delete(T resource);

    public abstract List<T> all();

}
