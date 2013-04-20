package traveltours.rest.service;

import traveltours.rest.model.Resource;

import java.util.List;

public abstract class ResourceService<T extends Resource> {

    public abstract T create(T resource);

    public abstract T  read(String id);

    public abstract T  update(T resource);

    public abstract void delete(T resource);

    public abstract List<T> all();

}
