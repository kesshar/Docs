
class Person {
   public Registration bookCourse(Course c) { ' }
}
abstract class Registration {
    public abstract void accept();
    public abstract void cancel();
}

class ReservedRegistration extends Registration { ' }
class AcceptedRegistration extends Registration { ' }
interface CourseRepository {
    public List<Course> find(');
}