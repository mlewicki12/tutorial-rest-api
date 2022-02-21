
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import config from 'config';

export interface UserDocument extends mongoose.Document {
  email: string,
  name: string,
  password: string,
  createdAt: Date, // from timestamps: true
  updatedAt: Date,

  comparePassword: (candidate: string) => Promise<boolean>
};

const userSchema = new mongoose.Schema({
  email: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  password: { type: String, required: true }
}, {
  timestamps: true
});

userSchema.pre('save', async function(next) {
  let user = this as UserDocument;

  if(!user.isModified('password')) {
    return next();
  }

  const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
  const hash = await bcrypt.hash(user.password, salt);

  user.password = hash;
  return next();
});

userSchema.methods.comparePassword = async function(candidate: string) {
  const user = this as UserDocument;
  return bcrypt.compare(candidate, user.password).catch(err => false);
}

const User = mongoose.model('User', userSchema);
export default User;